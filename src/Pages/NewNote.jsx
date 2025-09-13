import NewNoteForm from "../Components/NewNoteForm"

const NewNote = () => {
    return(
        <>
            <section>
                {/* <div style={{ paddingLeft: '2rem',  paddingRight: '2rem'}}>
                    <div style={{fontWeight: 'bold', fontSize: '1.5rem'}}>New Note</div>    
                </div> */}
                <NewNoteForm />            
            </section>
        </>
    )
}

export default NewNote