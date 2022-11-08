import styles from './Cell.module.css';


const Cell = (props : any) => {
	return (
		<td className={styles.cell} onClick={()=> props.handleClick(props.num)}>{props.value}</td>
	)
}

export default Cell;
