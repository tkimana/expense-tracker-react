import React from 'react'

export const TransactionList=() =>{
    return (
        <div>
          <h3>History</h3>  
          <ul id="list" class='list'>
              <li class='minus'></li>
              Cash<span>-400</span><button class='delete-btn'>x</button>
          </ul>
        </div>
    )
}


