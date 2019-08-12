import { observable } from 'mobx'
import { observer } from 'mobx-react'

@observer
class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  //other Methods
  render() {
    let item = this.props.item
    return (
        <div className = {item.completed ? "crossed": null}><input type="checkbox"onClick = {this.checkItem} 
            value={item.name}/> 
            {item.name} 
        </div>)
  }
}
