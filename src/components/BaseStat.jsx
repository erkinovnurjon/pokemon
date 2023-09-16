import "./Base.css"

const BaseStat = ({children}) => {
       const middleCircle ={
       
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            backgroundImage: `green(${children>7.4 ? '#db7908' : '#d9ee1b' } ${(children)/10}turn, #3d3d3d 0deg)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
    }
  return (
    <>
    <div className="big-circle">
      <div style={middleCircle}>
            <div className="small-circle">
                  {Math.round(children * 10)}
                  <sup>%</sup>

            </div>
      </div>

    </div>
    
    </>
  )
}

export default BaseStat