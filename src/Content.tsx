import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import NumberFormatCustom from './componments/NumberFormat'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

import * as Data from './constants/calculator.const'
import * as Layout from './constants/layout.const'
import { CalcInput } from './models/calculator.model'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(5)
    },
    formControl: {
      margin: theme.spacing(1),
      width: 130
    }
  })
)

export default function Content() {
  const classes = useStyles()
  const [state, setState] = React.useState<CalcInput>({
    type: 0, // 武器別
    atk: 0,
    cri: 0,
    etype: 0,
    ele: 0,
    sha: 0, // 斬味
    agil: 0, // 挑戰者
    maxp: 0, // 無傷
    hate: 0, // 怨恨
    weak: 0, // 弱點特效
    mind: 0, // 渾身
    real: 0, // 力量解放
    crip: 0, // 超會心
    ecri: 0, // 屬性會心
    eadd: 0, // 屬性加速
    safi: 0 // 龍脈覺醒
  })

  const handleChange = (
    event: React.ChangeEvent<{ id: string; value: unknown }>
  ) => {
    const name = event.target.id as keyof typeof state
    setState({
      ...state,
      [name]: event.target.value
    })
  }

  const handleSelect = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const name = event.target.name as keyof typeof state
    setState({
      ...state,
      [name]: event.target.value
    })
  }

  const renderState = (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="type">武器種類</InputLabel>
        <Select
          native
          value={state.type}
          onChange={handleSelect}
          inputProps={{
            name: 'type',
            id: 'type'
          }}
        >
          {Data.weaponType.map((type) => {
            return <option value={type.id}>{type.text}</option>
          })}
        </Select>
      </FormControl>
      <TextField
        id="atk"
        label="攻擊"
        className={classes.formControl}
        value={state.atk}
        onChange={handleChange}
        InputProps={{
          inputComponent: NumberFormatCustom as any
        }}
      />
      <TextField
        id="cri"
        label="會心"
        className={classes.formControl}
        value={state.cri}
        onChange={handleChange}
        InputProps={{
          inputComponent: NumberFormatCustom as any
        }}
      />
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="etype">屬性</InputLabel>
        <Select
          native
          value={state.etype}
          onChange={handleSelect}
          inputProps={{
            name: 'etype',
            id: 'etype'
          }}
        >
          {Data.eleType.map((type) => {
            return <option value={type.id}>{type.text}</option>
          })}
        </Select>
      </FormControl>
      <TextField
        id="ele"
        label="屬性值"
        className={classes.formControl}
        value={state.ele}
        onChange={handleChange}
        InputProps={{
          inputComponent: NumberFormatCustom as any
        }}
      />
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="etype">斬味</InputLabel>
        <Select
          native
          value={state.sha}
          onChange={handleSelect}
          inputProps={{
            name: 'sha',
            id: 'sha'
          }}
        >
          {Data.shaType.map((type) => {
            return <option value={type.id}>{type.text}</option>
          })}
        </Select>
      </FormControl>
    </div>
  )

  const renderSkill = (
    <React.Fragment>
      <div>
        {Layout.skillAttack.map((layout) => {
          return (
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor={layout.id}>{layout.text}</InputLabel>
              <Select
                native
                value={state[layout.id as keyof typeof state]}
                onChange={handleSelect}
                inputProps={{
                  name: layout.id,
                  id: layout.id
                }}
              >
                {layout.data.map((type) => {
                  return <option value={type.id}>{type.text}</option>
                })}
              </Select>
            </FormControl>
          )
        })}
        {Layout.skillCrit.map((layout) => {
          return (
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor={layout.id}>{layout.text}</InputLabel>
              <Select
                native
                value={state[layout.id as keyof typeof state]}
                onChange={handleSelect}
                inputProps={{
                  name: layout.id,
                  id: layout.id
                }}
              >
                {layout.data.map((type) => {
                  return <option value={type.id}>{type.text}</option>
                })}
              </Select>
            </FormControl>
          )
        })}
      </div>
      <div>
        {Layout.skillCrip.map((layout) => {
          return (
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor={layout.id}>{layout.text}</InputLabel>
              <Select
                native
                value={state[layout.id as keyof typeof state]}
                onChange={handleSelect}
                inputProps={{
                  name: layout.id,
                  id: layout.id
                }}
              >
                {layout.data.map((type) => {
                  return <option value={type.id}>{type.text}</option>
                })}
              </Select>
            </FormControl>
          )
        })}
      </div>
    </React.Fragment>
  )

  return (
    <Container>
      <Card className={classes.root}>
        <CardContent>
          {renderState}
          {renderSkill}
        </CardContent>
      </Card>
    </Container>
  )
}
