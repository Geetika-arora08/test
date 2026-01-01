function Usercard(props){
    return(
        <div style={styles.card}>
            <img src={props.avatar} alt="Avatar" style={styles.icons} />
            <h3>{props.name}</h3>
            <p>Age: {props.age}</p>
            <p>{props.des}</p>
            <p>Email: {props.email}</p>
            
        </div>
    )
}

// css for usercard function //

const styles = {
    card : {
        border: '1px solid red',
        borderRadius: '16px',
        padding: '10px',
        width: '250px',
        margin: '10px',
        textAlign: 'center',
       
    },  

    icons: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '10px',
    },

};

export default Usercard;

