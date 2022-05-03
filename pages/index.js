import { useWeb3React } from '@web3-react/core'
import { useCallback, useEffect } from 'react';
import { connector } from '../config/web3';
import Button from '@mui/material/Button';
import styles from '../styles/Home.module.css'


export default function Home() {

  const { activate, active, deactivate, account } = useWeb3React()

  const connect = useCallback(() => {
    activate(connector)
    localStorage.setItem('previouslyConnected', true)
  }, [activate])

  useEffect(() => {
    if (localStorage.getItem('previouslyConnected') === 'true') {
      connect()
    }
  }, [connect]);

  const disconnect = () => {
    deactivate()
    localStorage.removeItem('previouslyConnected')
  }

  return (
    <div className={styles.container}>
      <div className={styles.space} id={styles.stars1}></div>
      <div className={styles.space} id={styles.stars2}></div>
      <div className={styles.space} id={styles.stars3}></div>
      <div className={styles.wrapper}>
        <h1> Testing metamask connection</h1>
        {active ?
          <>
            <p>Account: {account}</p>
            <Button onClick={disconnect} variant="contained">Desconectar wallet</Button>

          </>
          :
          <>
            <Button onClick={connect} variant="contained">Conectar wallet</Button>
          </>}
      </div>
    </div>
  )

}