import '../../assets/css/homeView/newsMiniCard.css'

export function NewsMiniCard(props:any){

    const shortTitle = () => {
        const title = props.title.slice(0, 20)
        return title;
    }

    const shortAuthor = () => {
        const author = props.author
        if(author){
          return author.slice(0, 12)
        }
        return author;
    }

    function dateToDays() {
        let fechaActual = new Date();
        let newDate = new Date(props.date);
        let diferencia = fechaActual.getTime() - newDate.getTime();
        let segundos = Math.floor(diferencia / 1000);
      
        if (segundos < 60) {
          return "Hace menos de un minuto";
        } else if (segundos < 3600) {
          let minutos = Math.floor(segundos / 60);
          return `Hace ${minutos} minutos`;
        } else if (segundos < 86400) {
          let horas = Math.floor(segundos / 3600);
          return `Hace ${horas} horas`;
        } else if (segundos < 2592000) { // menos de 30 días
          let dias = Math.floor(segundos / 86400);
          return `Hace ${dias} días`;
        } else {
          let meses = Math.floor(segundos / 2592000); // 30 días en segundos
          return `Hace ${meses} meses`;
        }
      }
    return (
        <div className="newsMiniCard">
            <img src={props.image} alt='xd' />
            <h4 className="cardTitle">{shortTitle()}.</h4>
            <p className="cardText">{shortAuthor()} - {dateToDays()}</p>
        </div>
    )
}