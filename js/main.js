// Initialize html objetcs
const themeText = document.querySelector('.theme .theme-txt');
const sun = document.querySelector('#sun');
const moon = document.querySelector('#moon');
const search = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const allInfo = document.getElementById('all-information');

const userBio = document.getElementById('bio');
const noBio = document.getElementById('no-bio-desc');
const firstDate = document.getElementById('first-date');
const secondDate = document.getElementById('second-date');
const container = document.querySelector('.container');

// Remove some items from display
moon.style.display = "none";

// set the click function to sun object
sun.addEventListener('click', whiteTheme);
// changes to light theme
function whiteTheme() {

    document.querySelector('body').classList.add("white-theme");
    themeText.innerText = 'dark';
    sun.style.display = "none";
    moon.style.display = "block";
}

// changes to dark theme
moon.addEventListener('click', defaultTheme);
function defaultTheme() {

    document.querySelector('body').classList.remove("white-theme");
    themeText.innerText = 'light';
    moon.style.display = "none";
    sun.style.display = "block";
}


searchBtn.addEventListener('click', searchUser);
function searchUser() {
    const searchTxt = search.value;
    getUsers(searchTxt);

}

function getUsers(username) {
    fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((user) => {

        if (user.message == 'Not Found') {

            console.log('User not found');
        } else {

            if ( user.bio && search.value.length > 0) {

                container.classList.remove('no-bio-card');
                let information = `
                
                <div class="pic-details">
                    <div id="profile-pic">
                        <img src="${user.avatar_url}" alt="profile-pic">
                    </div>
    
                    <div class="personal-details">
                        <div class="name-mini-bio">
                            <p id="username">${user.name}</p>
                            <a href="${user.html_url}" id="name-link">@${user.login}</a>
                            <p class="date" id="first-date">Joined ${user.created_at}</p>
                            <p id="no-bio-desc">
                                This profile has no bio
                            </p>
                        </div>
    
                        <p class="date" id="second-date">
                            Joined 25 Jan 2011
                        </p>
                    </div>
                </div>
    
                <p id="bio">
                    ${user.bio}
                </p>
    
                <table class="count-table">
                    <tr>
                        <th>repos</th>
                        <th>followers</th>
                        <th>following</th>
                    </tr>
    
                    <tr>
                        <td id="repos">${user.public_repos}</td>
                        <td id="followers">${user.followers}</td>
                        <td id="following">${user.following}</td>
                    </tr>
                </table>
    
                <div class="social-icons">
                    <a href="#"  id="location" class="icons">
                        <i class="fa fa-map-marker"></i>
                        <span>San Francisco</span>
                    </a>
                    <a href="#"  id="twitter" class="icons disable">
                        <i class="fa fa-twitter"></i>
                        <span>Not Available</span>
                    </a>
                    <a href="#" id="link" class="icons">
                        <i class="fa fa-link"></i>
                        <span>https://github.blog</span>
                    </a>
                    <a href="#"  id="company" class="icons">
                        <i class="fa fa-github"></i>
                        <span>@github</span>
                    </a>
                    
                </div>
            
            `;
    
            allInfo.innerHTML = information;
    
            } else if ( user.bio == null && search.value.length > 0 ) {
    
                container.classList.add('no-bio-card');
                
                let information = `
                
                <div id="profile-pic">
                    <img src="${user.avatar_url}" alt="profile-pic">
                </div>
    
                <div class="pic-details">
                    <div class="personal-details">
                        <div class="name-mini-bio">
                            <p id="username">${user.name}</p>
                            <a href="${user.html_url}" id="name-link">@${user.login}</a>
                            <p class="date" id="first-date">${user.created_at}</p>
                            <p id="no-bio-desc">
                                This profile has no bio
                            </p>
                        </div>
        
                        <p class="date" id="second-date">
                            Joined ${user.created_at}
                        </p>
                    </div>
                </div>
    
    
                <table class="count-table">
                    <tr>
                        <th>repos</th>
                        <th>followers</th>
                        <th>following</th>
                    </tr>
    
                    <tr>
                        <td id="repos">${user.public_repos}</td>
                        <td id="followers">${user.followers}</td>
                        <td id="following">${user.following}</td>
                    </tr>
                </table>
    
                <div class="social-icons">
                    <a href="#"  id="location" class="icons">
                        <i class="fa fa-map-marker"></i>
                        <span>San Francisco</span>
                    </a>
                    <a href="#"  id="twitter" class="icons disable">
                        <i class="fa fa-twitter"></i>
                        <span>Not Available</span>
                    </a>
                    <a href="#"  id="link" class="icons">
                        <i class="fa fa-link"></i>
                        <span>https://github.blog</span>
                    </a>
                    <a href="#"  id="company" class="icons">
                        <i class="fa fa-github"></i>
                        <span>@github</span>
                    </a>
                    
                </div>
    
                `;
    
                allInfo.innerHTML = information;
                
            } else {
    
                console.log('error');
            }
        }


        const location = document.getElementById('location');
        const locationSpan = document.querySelector('#location span');
        if (user.location == null || user.blog == "") {

            locationSpan.textContent = 'Not Available';
            location.classList.add('disable');
        } else {

            locationSpan.textContent = user.location;
        }

        const twitter = document.getElementById('twitter');
        const twitterSpan = document.querySelector('#twitter span');
        if (user.twitter_username == null || user.blog == "") {

            twitterSpan.textContent = 'Not Available';
            twitter.classList.add('disable');
        } else {

            twitterSpan.textContent = user.twitter_username;
        }

        const link = document.getElementById('link');
        const linkSpan = document.querySelector('#link span');
        if (user.blog == null || user.blog == "") {

            linkSpan.textContent = 'Not Available';
            link.classList.add('disable');
        } else {

            linkSpan.textContent = user.blog;
        }

        const company = document.getElementById('github');
        const companySpan = document.querySelector('#github span');
        if (user.company == null || user.blog == "") {

            companySpan.textContent = 'Not Available';
            company.classList.add('disable');
        } else {

            companySpan.textContent = user.company;
        }

        
    });
}