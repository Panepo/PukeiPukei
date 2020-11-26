import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Container from '@material-ui/core/Container'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import Select from '@material-ui/core/Select'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import React from 'react'

import NumberFormatCustom from './componments/NumberFormat'
import * as Data from './constants/calculator.const'
import * as Layout from './constants/layout.const'
import * as Calculator from './helpers/calculator.helper'
import { getTextById } from './helpers/common.helper'
import imageElement from './images/element'
import imageWeapon from './images/weapon'
import { CalcInput, CalcOutput } from './models/calculator.model'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: '-55vh',
      marginBottom: theme.spacing(1),
      flex: 1
    },
    formControl: {
      margin: theme.spacing(1),
      width: 130
    },
    subtitle: {
      color: 'white',
      background: 'linear-gradient(165deg, #9966ff 20%, #ff99ff 70%)'
    },
    subtitleText: {
      margin: theme.spacing(1)
    },
    inputs: {
      margin: theme.spacing(1)
    },
    image: { width: 15, height: 15 },
    output: {
      marginBottom: theme.spacing(5)
    }
  })
)

export default function Content() {
  const classes = useStyles()
  const [state, setState] = React.useState<CalcInput>({
    type: '0', // 武器別
    atk: '0',
    cri: '0',
    etype: '0',
    ele: '0',
    sha: '0', // 斬味
    agil: '0', // 挑戰者
    maxp: '0', // 無傷
    hate: '0', // 怨恨
    weak: '0', // 弱點特效
    mind: '0', // 渾身
    real: '0', // 力量解放
    crip: '0', // 超會心
    ecri: '0', // 屬性會心
    scri: '0', // 特殊會心
    eadd: '0', // 屬性加速
    safi: '0', // 龍脈覺醒
    bane: '0', // 災禍轉福
    cat: '0',
    drink: '1',
    food: '0',
    dust: '0',
    slot1: '1',
    slot2: '1'
  })
  const [output, setOutput] = React.useState<CalcOutput>({
    out: false,
    cri: '0',
    atk: '0',
    ele: '0',
    spec: []
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

  const handleCalc = () => {
    const cri = Math.floor(Calculator.calcCritical(state))
    const atk = Math.round(Calculator.calcAttack(state, cri))
    const ele = Math.round(Calculator.calcElement(state, cri))
    const eleType = getTextById(Data.eleType, state.etype)
    const spec = Calculator.calcSpecOutput(state.type, atk, ele)

    setOutput({
      out: true,
      cri: cri.toString(),
      atk: atk.toString(),
      ele: eleType + ' ' + ele.toString(),
      spec: spec
    })
  }

  const handleCancel = () => {
    console.log(output.out)
    setState({
      type: '0', // 武器別
      atk: '0',
      cri: '0',
      etype: '0',
      ele: '0',
      sha: '0', // 斬味
      agil: '0', // 挑戰者
      maxp: '0', // 無傷
      hate: '0', // 怨恨
      weak: '0', // 弱點特效
      mind: '0', // 渾身
      real: '0', // 力量解放
      crip: '0', // 超會心
      ecri: '0', // 屬性會心
      scri: '0', // 特殊會心
      eadd: '0', // 屬性加速
      safi: '0', // 龍脈覺醒
      bane: '0', // 災禍轉福
      cat: '0',
      drink: '1',
      food: '0',
      dust: '0',
      slot1: '1',
      slot2: '1'
    })
  }

  const renderState = (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="type">武器種類</InputLabel>
        <Select
          value={state.type}
          onChange={handleSelect}
          inputProps={{
            name: 'type',
            id: 'type'
          }}>
          {Data.weaponType.map((type, index) => {
            return (
              <MenuItem value={type.id} key={'type' + type.id}>
                <img
                  className={classes.image}
                  src={imageWeapon[index as keyof typeof imageWeapon]}
                  alt={type.text}
                />
                {' ' + type.text}
              </MenuItem>
            )
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
          value={state.etype}
          onChange={handleSelect}
          inputProps={{
            name: 'etype',
            id: 'etype'
          }}>
          <MenuItem value={0}>無</MenuItem>
          {Data.eleType.map((type, index) => {
            return (
              <MenuItem value={type.id} key={'etype' + type.id}>
                <img
                  className={classes.image}
                  src={imageElement[index as keyof typeof imageElement]}
                  alt={type.text}
                />
                {' ' + type.text}
              </MenuItem>
            )
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
        <InputLabel htmlFor="sha">斬味</InputLabel>
        <Select
          native
          value={state.sha}
          onChange={handleSelect}
          inputProps={{
            name: 'sha',
            id: 'sha'
          }}>
          {Data.shaType.map((type) => {
            return (
              <option value={type.id} key={'sha' + type.id}>
                {type.text}
              </option>
            )
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
            <FormControl
              className={classes.formControl}
              key={'form' + layout.id}>
              <InputLabel htmlFor={layout.id}>{layout.text}</InputLabel>
              <Select
                native
                value={state[layout.id as keyof typeof state]}
                onChange={handleSelect}
                inputProps={{
                  name: layout.id,
                  id: layout.id
                }}>
                {layout.data.map((type) => {
                  return (
                    <option value={type.id} key={layout.id + type.id}>
                      {type.text}
                    </option>
                  )
                })}
              </Select>
            </FormControl>
          )
        })}
        {Layout.skillCrit.map((layout) => {
          return (
            <FormControl
              className={classes.formControl}
              key={'form' + layout.id}>
              <InputLabel htmlFor={layout.id}>{layout.text}</InputLabel>
              <Select
                native
                value={state[layout.id as keyof typeof state]}
                onChange={handleSelect}
                inputProps={{
                  name: layout.id,
                  id: layout.id
                }}>
                {layout.data.map((type) => {
                  return (
                    <option value={type.id} key={layout.id + type.id}>
                      {type.text}
                    </option>
                  )
                })}
              </Select>
            </FormControl>
          )
        })}
      </div>
      <div>
        {Layout.skillCrip.map((layout) => {
          return (
            <FormControl
              className={classes.formControl}
              key={'form' + layout.id}>
              <InputLabel htmlFor={layout.id}>{layout.text}</InputLabel>
              <Select
                native
                value={state[layout.id as keyof typeof state]}
                onChange={handleSelect}
                inputProps={{
                  name: layout.id,
                  id: layout.id
                }}>
                {layout.data.map((type) => {
                  return (
                    <option value={type.id} key={layout.id + type.id}>
                      {type.text}
                    </option>
                  )
                })}
              </Select>
            </FormControl>
          )
        })}
      </div>
      <div>
        {Layout.skillItem.map((layout) => {
          return (
            <FormControl
              className={classes.formControl}
              key={'form' + layout.id}>
              <InputLabel htmlFor={layout.id}>{layout.text}</InputLabel>
              <Select
                native
                value={state[layout.id as keyof typeof state]}
                onChange={handleSelect}
                inputProps={{
                  name: layout.id,
                  id: layout.id
                }}>
                {layout.data.map((type) => {
                  return (
                    <option value={type.id} key={layout.id + type.id}>
                      {type.text}
                    </option>
                  )
                })}
              </Select>
            </FormControl>
          )
        })}
      </div>
    </React.Fragment>
  )

  const renderOutput = () => {
    if (output.out) {
      return (
        <Card className={classes.output}>
          <CardContent>
            <Paper
              className={classes.subtitle}
              variant="outlined"
              elevation={0}>
              <Typography
                className={classes.subtitleText}
                gutterBottom
                variant="h5"
                component="h2">
                Results
              </Typography>
            </Paper>
            <div>
              <TextField
                id="outCri"
                label="會心"
                className={classes.formControl}
                value={output.cri}
              />
              <TextField
                id="outAtk"
                label="攻擊"
                className={classes.formControl}
                value={output.atk}
              />
              <TextField
                id="outEle"
                label="屬性"
                className={classes.formControl}
                value={output.ele}
              />
            </div>
            {output.spec.length > 0 ? (
              <div>
                {output.spec.map((specData) => {
                  return (
                    <TextField
                      id={specData.text}
                      label={specData.text}
                      className={classes.formControl}
                      value={specData.value}
                    />
                  )
                })}
              </div>
            ) : null}
          </CardContent>
        </Card>
      )
    } else return null
  }

  return (
    <Container>
      <Card className={classes.root}>
        <CardContent>
          <Paper className={classes.subtitle} variant="outlined" elevation={0}>
            <Typography
              className={classes.subtitleText}
              gutterBottom
              variant="h5"
              component="h2">
              Status
            </Typography>
          </Paper>
          <div className={classes.inputs}>
            {renderState}
            {renderSkill}
          </div>
          <Container>
            <Button onClick={handleCalc} color="primary">
              Calculate
            </Button>
            <Button onClick={handleCancel} color="primary">
              Cancel
            </Button>
          </Container>
        </CardContent>
      </Card>
      {renderOutput()}
    </Container>
  )
}
