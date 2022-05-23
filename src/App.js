import { NhostClient, NhostReactProvider } from '@nhost/react'
import { useEffect } from 'react'
const nhost = new NhostClient({
  backendUrl: 'https://seuwsudjlbtrxykhswfg.nhost.run/'
})

function App() {

  useEffect(()=>{
    const queryNhost = async () => {
      const res = await fetch('https://seuwsudjlbtrxykhswfg.nhost.run/v1/functions/hello')
      console.log(res.json())
      const xyz = await nhost.graphql.request(`{
        users {
          id
        }
      }`)
      console.log(xyz)
    }
    queryNhost()
  },[])


  return (
    <NhostReactProvider nhost={nhost}>
      <div>Testing</div>
    </NhostReactProvider>
  ) 
  }

export default App;
