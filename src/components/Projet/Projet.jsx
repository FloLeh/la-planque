import './Projet.css'

const Projet = (props) => {
  const { title } = props
  const newTitle = title.split(' ').join('_')
  const background = require(`../../assets/images/En_couverture`)[newTitle]

  return (
    <div className='projet' style={{'backgroundImage': `url(${background})`}}>
      <div className="projet__bottom">
        {title}
      </div>
    </div>
  )
}

export default Projet
