function ContactCard({ name, phonenumber, email }) {
    
    const cardStyle = {
        border: "1px solid #e9e9e9",
        borderRadius: "10px",
        padding: "20px",
        margin: "10px",
        textAlign: "center",
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
    }
    const nameStyle = {
        fontWeight: "bold",
        color: "rgba(0, 0, 0, 0.8)",
    }
    const detailStyle = {
        color: "rgb(0, 98, 128)",
    }
    
    return (
      <div style={cardStyle}>
        <h2 style={nameStyle}>{name}</h2>
        <p style={detailStyle} >{phonenumber}</p>
        <p style={detailStyle}>{email}</p>
      </div>
    )
  }

const contacts = [
    { name: "Aman", phonenumber: "6973648790", email: "aman456@gmail.com" },
    { name: "Sahil", phonenumber: "8776623146", email: "sahil79@gmail.com" },
    { name: "Rohit", phonenumber: "8088287663", email: "rohit009@gmail.com" },
    { name: "Rahul", phonenumber: "6789087663", email: "rahul007@gmail.com" },
]
    const cardStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    };

function Contact() {    
    return (
        <div style={cardStyle} >
            {contacts.map((contact, index) => (
                <ContactCard key={index} {...contact} />
            ))}
        </div>
    )
}

export default Contact