import React from 'react'

const Bracelets = () => {
        const data = [
          { id: 1, name: "John Doe" },
          { id: 2, name: "Victor Wayne" },
          { id: 3, name: "Jane Doe" },
        ];
      
        return (
          <div className="users">
            {data.map((Bracelets) => (
              <div className="user">{Bracelets}</div>
            ))}
          </div>
        );
      };

export default Bracelets