/* eslint-disable react/prop-types */
import { connect } from "react-redux"

function Navbar({userName}) {
  return (
    <div className="todo-section">
        <h3>
          What&apos;s up, <span className="user">{ userName?.user?.username || 'Guest'}</span>
        </h3>
      <small>Add a todo</small>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userName: state.auth.user
  }
}

export default connect(mapStateToProps)(Navbar)
