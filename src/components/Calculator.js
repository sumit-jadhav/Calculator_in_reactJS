import React, { useEffect, useState } from "react"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Textfield from "@mui/material/TextField"
import Paper from "@mui/material/Paper"
import Card from "@mui/material/Card"
import "./Calculator.css"

function Calculator() {
  const [value, setValue] = useState("")
  const [array, setArray] = useState([])
  //   let a = parseInt("02" * "3")
  //   console.log(a.toString( ))
  //   console.log(eval(a).toString())

  const addValue = (e) => {
    e.preventDefault()
    setValue(value.concat(e.target.value))
  }
  const clear = () => {
    setValue("")
  }
  const allClear = () => {
    setArray([])
    setValue(" ")
  }
  const calculate = () => {
    try {
      let a = eval(value).toString()
      let sum = value + "=" + a
      //   console.log(sum)
      setValue(a)

      if (array.length > 4) {
        array.shift()
      }
      array.push(sum)
      setValue("")
      //   console.log(array)
    } catch (err) {
      setValue("error")
    }
  }
  const uRoot = () => {
    setValue(Math.sqrt(value).toString())
  }
  const square = () => {
    setValue((value * value).toString())
  }

  const backSpace = () => {
    setValue(value.slice(0, value.length - 1))
  }
  useEffect(() => {
    console.log(value)
  }, [value])

  return (
    <Card sx={{ maxWidth: 500, padding: 10 }}>
      <Paper elevation={3}>
        <div>
          {array.map((a) => {
            return <div>{a}</div>
          })}
        </div>
        <Grid
          container
          // sx={{ texttransform: lowercase }}
        >
          <Grid item xs={12}>
            <Textfield
              //   sx={{ textalign: right }}
              value={value}
              variant="standard"
            />
          </Grid>
          <Grid item xs={2}>
            <Button value={"7"} onClick={addValue}>
              7
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button value={8} onClick={addValue}>
              8
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button value={9} onClick={addValue}>
              9
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button value={`/`} onClick={addValue}>
              /
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button onClick={backSpace}>&#x2190;</Button>
          </Grid>
          <Grid item xs={2}>
            <Button onClick={clear}>C</Button>
          </Grid>
          <Grid item xs={2}>
            <Button value={4} onClick={addValue}>
              4
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button value={5} onClick={addValue}>
              5
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button value={6} onClick={addValue}>
              6
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button value={`*`} onClick={addValue}>
              *
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button value={`(`} onClick={addValue}>{`(`}</Button>
          </Grid>
          <Grid item xs={2}>
            <Button value={`)`} onClick={addValue}>{`)`}</Button>
          </Grid>
          <Grid item xs={2}>
            <Button value={1} onClick={addValue}>
              1
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button value={2} onClick={addValue}>
              2
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button value={3} onClick={addValue}>
              3
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button value={`-`} onClick={addValue}>
              -
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button onClick={square}>x^2</Button>
          </Grid>
          <Grid item xs={2}>
            <Button onClick={uRoot}>&#8730;</Button>
          </Grid>
          <Grid item xs={2}>
            <Button value={0} onClick={addValue}>
              0
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button value={`.`} onClick={addValue}>
              .
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button value={`%`} onClick={addValue}>
              %
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button value={`+`} onClick={addValue}>
              +
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button onClick={calculate}>=</Button>
          </Grid>
          <Grid item xs={2}>
            <Button onClick={allClear}>AC</Button>
          </Grid>
        </Grid>
      </Paper>
    </Card>
  )
}
export default Calculator
