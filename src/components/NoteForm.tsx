import { FormControl, FormHelperText, Input, InputLabel, Stack, TextField } from "@mui/material"
import { Form } from "react-router-dom"


const NoteForm = () => {
  return (
  <Form method="post" >
    <Stack direction={{xs: 'column', sm: 'row'}}  spacing={2} >
    <FormControl>
        <TextField id="title" label="Title" variant="outlined" />
    </FormControl>
    <FormControl >
        <TextField id="tags" label="Tags" variant="outlined" />
    </FormControl>
    </Stack>
  </Form>
  )
}

export default NoteForm