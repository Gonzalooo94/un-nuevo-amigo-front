import face from '../imagenes/rs/face.png';
import insta from '../imagenes/rs/insta.png';
import youtube from '../imagenes/rs/youtube.png';

export default function rs () {

    return (

        <table className="container">
              <tr>              

<td width="150px">&nbsp;</td>       
<td><a href="https://www.youtube.com/"  target="_blank" rel="noreferrer" class="navbar-brand"><img src={youtube} alt="" width="80px" height="80px" /></a></td>
<td width="100px">&nbsp;</td>
<td><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" class="navbar-brand"><img src={face} alt="" width="100px" height="80px" /></a></td> 
<td width="100px">&nbsp;</td>
<td><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" class="navbar-brand"><img src={insta} alt="" width="80px" height="80px" /></a></td> 
<td width="100px">&nbsp;</td>  
       </tr>
        </table>
      
    )


}