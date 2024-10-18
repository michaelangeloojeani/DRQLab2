

import { useState } from "react";

function Create() {
  const [title, setTitle] = useState('');
  const [poster, setPoster] =  useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(year);
    console.log(poster);
  }

  return (
    <div>
      <h2>This is my Create Component.</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}/>

            <label>Add Release Year: </label>
            <input type="text"
              className="form-control"
              value={year}
              onChange={(e) => { setYear(e.target.value) }}/>

              <label>Add Poster Url: </label>
          <input type="text"
            className="form-control"
            value={poster}
            onChange={(e) => { setPoster(e.target.value) }}/>
            
          
        </div>
        <input type="submit" value="Add Movie" />
      </form>

    </div>
  );
}

export default Create;