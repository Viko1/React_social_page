import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
      <div className='app-wrapper'>
          <header className='header'>
              <img src='data:image/jpeg;base64,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oIglMphCJiCarEpM54LnTbIsCMWnwvaCQ5u197XB2K74eGHUHGtDk5FjnQ4EKYD4gabZnQzck6huZzibX5sqesaPPS8u7LFNjppYncEjYa3sfXTdBMMI4Co9cqlRnsSSpc8T8fuy8vYCwnMNAQHNJcTexWdjajT9YxPIYeof/bQpdhmBFEEPhsc05YQDTZpc2x8N/wAQK341OUELvC7T4HgZjpa9wAdF9mZ6FLwwTcktLgLHZoub6eHcb23QT3D9KruGu0m9TjGbbOwTnjtgCEBEhe7mDLtbZmgOl81raa+Ph3C9Qm+ySWjSrHQ52UfFiwMzS13vvzMsbaPbpbYnKquarKtHiJvt7rjrre1m+K1je21tVydU5Zu+bj+zfrcEiwy67cbcoNM7Nae9vZRDkJuG4Esjgw3tIJDokWwLTrqD81l9j0nFkuz2WhTEMw3nOXNc0tNzEfqQddRb5La4k7Lw8mY+/wC7YE3Gmug0Go1OmoXE1CD7O2YZmLXEAeE31Nr2te3og1Xtklo832czUvKMc9x7uzWguJtFhk6DU6LUe2XC8+af/FqKx7u+hsgzUNjSS7KWuhPsNSWluUnoRxdVZ9TlmXzlwsSCMjr6WubZdtRrtrukxUYctMGHG0AaHX1O4ik6AcCGT+9Q0CvUmuYl7SC+mRnSgkYIEOM6AIoc+KDnyh5DT4SATrbLbleTApVZostW8PzeeY76WfMsjNg5GviOa5sQZW3AeSQMoOuUm2ulWh1KWiRGw2k3dsC1w6jW48Pune17FZiCX0vs8g1mQpdTnHOh93LwWzEEtP8ANDA1zGu1FsrhqCDcaaWWG6nz3/S2IoYhRM0SZimGMpu8ENsQLeIfBVxEE3wbUcJwny0GWkHQ5nK1ne+wlhDy2zj3ndi19bm/JVIREBERAREQEREBERAREQEREBERAWFHkGzM330TQZcosdb3DgfiCNPiVmogwDSZY6HNzcX3JBBPxsSu+ck4U4AI17DgGyyEQeTOUdkRloB1uTZ2o1zX0II1Lr6g32+HfCpMCHG783LjqT1Ov+p55ss9EGI+nwXtY038AsNePDoevut/Rc/Y4YlmwG3Aba3UZbW+iyEQePEojGOaZQgWNzmAdrpY6jUgD4nqs2ap0vNPL417kW0NtLRG/SI75dFlogxGU+AyZ9obfNrfzvc/VxWWiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg//9k=' />
          </header>
          <nav className='nav'>
              <div>
                  <a>Profile</a>
              </div>
              <div>
                  <a>Messages</a>
              </div>
              <div>
                  <a>News</a>
              </div>
              <div>
                  <a>Music</a>
              </div>
              <div>
                  <a>Settings</a>
              </div>
          </nav>
          <div className='content'>
              <div>
                  <img src='https://dbijapkm3o6fj.cloudfront.net/resources/20611,1004,1,6,4,0,960,330/-3842-/20161013141806/image-gallery.jpeg'/>
              </div>
              <div className='ava'>
                  <img src='https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg'/>
                  ava + description
              </div>
              <div>
                  My posts
              </div>
              <div>
                  new post
              </div>
              <div>
                  post 1
              </div>
              <div>
                  post 2
              </div>
          </div>
      </div>
  );
}



export default App;
