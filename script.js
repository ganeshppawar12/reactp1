const MyReactApp=()=>{

    return(
       <div>
    <h1>Explore Digital Horizons</h1>
    <div>
        <p>Embark on a journey through the vast universe of web technologies and unlock endless possibilities.</p>
    </div>
    <div>
        <p>Dive deep into the world of coding, from creating stunning web pages to mastering backend logic.</p>
    </div>
    <div>
        <p>Whether you're crafting your first website or enhancing your skills, every step is a leap toward innovation.</p>
    </div>
</div>
 
    )
};
const rootDiv = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(rootDiv);
reactRoot.render(<MyReactApp/>)
