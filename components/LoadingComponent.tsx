import styles from "../styles/loadingprogress.module.css"

type LoadingComponentProp=
{
    noOfLines:number
}

function LoadingComponent(props:LoadingComponentProp) {
    const loadingBars = Array.from({ length: props.noOfLines}, (_, index) => (
        <div className={styles.loadingbar} key={index} />
    ));
  return (
      <div className={styles.loadingcontainer}>      
       {loadingBars}
      </div>
  )
}



export default LoadingComponent
