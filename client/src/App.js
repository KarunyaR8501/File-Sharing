import {useRef , useState , useEffect} from "react"
import './App.css';
import file from "./assest/file.jpg"
import { UploadFile } from "./services/api";

function App() {
  const fileInputRef = useRef()
  const [files , setFiles] = useState()
  const [result , setResult] = useState()

  

function onUploadClick(){
  fileInputRef.current.click()
}

useEffect(()=>{
  const getImages= async ()=>{
    if(files){
      const data = new FormData()
      data.append("name" , files.name)
      data.append("file", files)

      let response = await UploadFile(data)
      setResult(response.path)

    }

  }
  
  getImages()
},[files])

  return (
    <div className="container">
      {/* <img src={img} alt="file logo"/> */}
      <div className="wrapper">
         <h1>Simple File Sharing!</h1>
         <p>upload and share the download link.</p>

         <button onClick={()=>onUploadClick()}>Upload</button>
         <input type="file"
         ref={fileInputRef}
         style={{display:"none"}}
         onChange={(e)=> setFiles(e.target.files[0])}/>
         <a href={result} target="_blank">{result}</a>
      </div>
    </div>
  );
}

export default App;
