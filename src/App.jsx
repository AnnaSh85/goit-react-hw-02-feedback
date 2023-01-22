
import Vote from "modules/Vote/Vote";

import "./shared/styles/styles.css"

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}

      
    > 
   <Vote />      
  
    </div>
  );
};

export default App;
