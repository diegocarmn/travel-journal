import Header from '../src/components/Header'
import Entry from './components/Entry'
import data from './components/data'
import Grid from '@mui/material/Grid';

function App() {

  const entryElements = data.map(entry => {
    return (
      <Entry
        key={entry.id}
        {...entry}
      />
    )
  })

  return (
    <>
      <Header />
      <Grid container spacing={2} sx={{ pt: 4 }}>
      {entryElements}
      </Grid>
      
    </>
  )
}

export default App
