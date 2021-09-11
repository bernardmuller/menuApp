import React, {useContext} from 'react'
import { Container } from 'react-bootstrap'
import ThemeButton from './UI/themeButton/ThemeButton'
import Card from './UI/card/Card'
import styles from './Dashboard.module.css'
import AddIcon from '@material-ui/icons/Add';
import { ThemeContext } from '../contexts/ThemeContext'



export default function Dashboard() {    
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    return (
        <Container >
            <div className={styles.cards_container}>
                <div className={styles.card_container}>                
                    <Card className={darkMode ? `${styles.card} ${styles.card_dark}` : `${styles.card} ${styles.card_light}`}>
                        <AddIcon className={styles.plus} style={{fill: 'gray'}}/>
                    </Card>
                    <h2 className={styles.heading}>New Menu</h2>
                </div>
                <div className={styles.card_container}>
                    <Card className={darkMode ? `${styles.card} ${styles.card_dark}` : `${styles.card} ${styles.card_light}`}>
                        <AddIcon className={styles.plus} style={{fill: 'gray'}}/>
                    </Card>
                    <h2 className={styles.heading}>New Meal</h2>
                </div>
                <div className={styles.card_container}>
                    <Card className={darkMode ? `${styles.card} ${styles.card_dark}` : `${styles.card} ${styles.card_light}`}>
                        <AddIcon className={styles.plus} style={{fill: 'gray'}}/>
                    </Card>
                    <h2 className={styles.heading}>New Recipe</h2>
                </div>
            </div>
            <div className={styles.cards_container}>
                <div className={styles.card_container}>                
                    <Card className={darkMode ? `${styles.card} ${styles.card_dark}` : `${styles.card} ${styles.card_light}`}>
                        <AddIcon className={styles.plus} style={{fill: 'gray'}}/>
                    </Card>
                    <h2 className={styles.heading}>New Menu</h2>
                </div>
                <div className={styles.card_container}>
                    <Card className={darkMode ? `${styles.card} ${styles.card_dark}` : `${styles.card} ${styles.card_light}`}>
                        <AddIcon className={styles.plus} style={{fill: 'gray'}}/>
                    </Card>
                    <h2 className={styles.heading}>New Meal</h2>
                </div>
                <div className={styles.card_container}>
                    <Card className={darkMode ? `${styles.card} ${styles.card_dark}` : `${styles.card} ${styles.card_light}`}>
                        <AddIcon className={styles.plus} style={{fill: 'gray'}}/>
                    </Card>
                    <h2 className={styles.heading}>New Recipe</h2>
                </div>
            </div>
            <div className={styles.cards_container}>
                <div className={styles.card_container}>                
                    <Card className={darkMode ? `${styles.card} ${styles.card_dark}` : `${styles.card} ${styles.card_light}`}>
                        <AddIcon className={styles.plus} style={{fill: 'gray'}}/>
                    </Card>
                    <h2 className={styles.heading}>New Menu</h2>
                </div>
                <div className={styles.card_container}>
                    <Card className={darkMode ? `${styles.card} ${styles.card_dark}` : `${styles.card} ${styles.card_light}`}>
                        <AddIcon className={styles.plus} style={{fill: 'gray'}}/>
                    </Card>
                    <h2 className={styles.heading}>New Meal</h2>
                </div>
                <div className={styles.card_container}>
                    <Card className={darkMode ? `${styles.card} ${styles.card_dark}` : `${styles.card} ${styles.card_light}`}>
                        <AddIcon className={styles.plus} style={{fill: 'gray'}}/>
                    </Card>
                    <h2 className={styles.heading}>New Recipe</h2>
                </div>
            </div>
        </Container>
    )
}


