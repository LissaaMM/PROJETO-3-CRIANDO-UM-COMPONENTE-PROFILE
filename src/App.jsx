import Profile from './components/Profile'

export default function App() {
  return( 
        <div>
          <Profile 
           img={'./eu.jfif'}
           name={'Larissa Mendes'} 
           bio={'Estudante de Desenvolvimento de Sistemas'} 
           contact={'+55 (85) 994291632'} 
           email={'lissaamendes@gmail.com'} 
           githubUrl={'https://github.com/LissaaMM'} 
           instagramUrl={'https://www.instagram.com/analiss.mendes?igsh=azF4a2N4cTNpdm8='} 
           />
        </div> 
   
  )
}
