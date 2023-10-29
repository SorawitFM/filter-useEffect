import './App.css'
import { useEffect, useState } from 'react'

//mock data
import userData from './userData'


const svgPreson = <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <path fill="#6b7280" d="M16 112v384h480V112Zm220.8 229.6a32.167 32.167 0 0 0 38.4 0l23.467-17.6L464 448v16H48v-16l165.333-124ZM256 316L48 160v-16h416v16ZM48 200l138.667 104L48 408Zm416 208L325.333 304L464 200Z" />
</svg>

function App() {
  const [showData, setShowData] = useState(userData)
  const [value, setValue] = useState('')

  useEffect(() => {
    let newArray = [...userData]
    newArray = newArray.filter(
      (item) =>
        item.first_name.toUpperCase().includes(value.toUpperCase()) ||
        item.last_name.toUpperCase().includes(value.toUpperCase()) ||
        item.first_name.toLowerCase().includes(value.toLowerCase()) ||
        item.last_name.toLowerCase().includes(value.toLowerCase())
    );
    setShowData(newArray)
  }, [value])

  return (
    <div className='container'>
      <div className='content'>
        <div className='header'>
          <h3>Your Name</h3>
          <h4>Bangkok, Thailand</h4>
        </div>
        <input type="text" placeholder='search' value={value} onChange={(e) => setValue(e.target.value)} />
        <ul>
          {showData.map((user) => {
            return <li key={user.id}>
              <img src={user.avatar} />
              <div>
                <div>{`${user.first_name} ${user.last_name}`}</div>
                <div>{`${user.email}`}</div>
              </div>
              <div>
                {svgPreson}
              </div>
            </li>
          })}
        </ul>
      </div>

    </div>
  )
}

export default App