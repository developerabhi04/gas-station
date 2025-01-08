import { useState, useEffect } from 'react';
import AdminLayout from './AdminLayout';
import { toast } from 'react-hot-toast'; // Import react-hot-toast
import { server } from '../../main'

const DateChange = () => {
    const [publishedDate, setPublishedDate] = useState('');
    const [closingDate, setClosingDate] = useState('');
    const [loading, setLoading] = useState(true);
    const [documentId, setDocumentId] = useState(null); // Store document ID for update

    // Get today's date in the format YYYY-MM-DD to limit future date selection
    const today = new Date().toISOString().split('T')[0];

    // Fetch current dates from the backend when the component mounts
    useEffect(() => {
        const fetchDates = async () => {
            try {
                const response = await fetch(`${server}/date/dates`);
                const data = await response.json();

                console.log("API response:", data); // Add this to inspect the response

                if (response.ok && data.data.length > 0) {
                    const latestDates = data.data[0];
                    setPublishedDate(latestDates.publishedDate.split('T')[0]);
                    setClosingDate(latestDates.closingDate.split('T')[0]);
                    setDocumentId(latestDates._id);
                } else {
                    console.error('Failed to fetch dates:', data.message);
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching dates:', error);
                setLoading(false);
            }
        };

        fetchDates();
    }, []);

    // Function to create new dates
    const createDates = async () => {
        try {
            const response = await fetch(`${server}/date/dates`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ publishedDate, closingDate }),
            });

            const data = await response.json();
            if (response.ok) {
                toast.success('Dates created successfully');
                setDocumentId(data.data._id); // Set the new document ID for future updates
            } else {
                console.error('Failed to create dates:', data.message);
                toast.error('Error: ' + data.message);
            }
        } catch (error) {
            console.error('Error creating dates:', error);
            toast.error('An error occurred while creating the dates.');
        }
    };

    // Function to update existing dates
    const updateDates = async () => {
        try {
            const response = await fetch(`${server}/date/dates/${documentId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ publishedDate, closingDate }),
            });

            const data = await response.json();
            if (response.ok) {
                toast.success('Dates updated successfully');
            } else {
                console.error('Failed to update dates:', data.message);
                toast.error('Error: ' + data.message);
            }
        } catch (error) {
            console.error('Error updating dates:', error);
            toast.error('An error occurred while updating the dates.');
        }
    };

    // Submit handler to either create or update dates
    const handleSubmit = async () => {
        if (!publishedDate || !closingDate) {
            toast.error('Please provide both published and closing dates.');
            return;
        }

        if (documentId) {
            await updateDates(); // Update if documentId exists
        } else {
            await createDates(); // Create if no documentId
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <AdminLayout>
            <div style={styles.container}>
                <h2 style={styles.heading}>Set Published Date and Closing Date</h2>

                {/* Published Date Section */}
                <div style={styles.field}>
                    <label htmlFor="publishedDate" style={styles.label}>Published Date:</label>
                    <input
                        type="date"
                        id="publishedDate"
                        name="publishedDate"
                        value={publishedDate}
                        onChange={(e) => setPublishedDate(e.target.value)}
                        max={today}
                        style={styles.input}
                    />
                </div>

                {/* Closing Date Section */}
                <div style={styles.field}>
                    <label htmlFor="closingDate" style={styles.label}>Closing Date:</label>
                    <input
                        type="date"
                        id="closingDate"
                        name="closingDate"
                        value={closingDate}
                        onChange={(e) => setClosingDate(e.target.value)}
                        min={publishedDate || today} // Ensure closing date is not before published date
                        style={styles.input}
                    />
                </div>

                {/* Submit Button */}
                <button style={styles.button} onClick={handleSubmit}>
                    {documentId ? 'Update Dates' : 'Create Dates'}
                </button>
            </div>
        </AdminLayout>
    );
};

// Basic inline styles (You can replace with your preferred CSS or styling solution)
const styles = {
    container: {
        padding: '20px',
        maxWidth: '500px',
        margin: '15rem auto',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        fontSize: '24px',
        color: '#333',
    },
    field: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        marginBottom: '8px',
        fontSize: '16px',
        color: '#333',
    },
    input: {
        width: '100%',
        padding: '8px 12px',
        fontSize: '14px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        backgroundColor: '#fff',
    },
    button: {
        width: '100%',
        padding: '10px 15px',
        fontSize: '16px',
        backgroundColor: 'black',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease', // Added transition for hover effect
    },
    buttonHover: {
        backgroundColor: '#333', // Darker shade on hover
    },
};

export default DateChange;
