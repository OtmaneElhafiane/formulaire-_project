function Textarea(props : any){
  
    return (
      <div className="text_area">
        <label>{props.title}</label>
        <textarea placeholder={props.ph}> </textarea>
      </div>
    );
  }
  
export default Textarea ;