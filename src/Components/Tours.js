import Card from './Card';

function Tours({tours,removeTour}){
    return (
        <div className="container">
            <div>
                <h1 className="title" >Plan With Love</h1>
            </div>
            <div className="cards" >
                {
                    tours.map((tour)=>{
                        //map function ki help se har ek tour ke liye ek card create kr do
                        //...tour means-- hmne ek copy create ki h aur use card component m send kiya h
                        return <Card key={tour.id} {...tour} removeTour = {removeTour} ></Card>
                    })
                }
            </div>
        </div>
    )
}

export default Tours;