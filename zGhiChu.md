# * Xuân Hinh *

1. `npm i customize-cra react-app-rewired -D`
   cấu hình file `config-override` để override lại webpack 
   
2. `npm i babel-plugin-module-resolver -D`
   cấu hình để import file `.babelrc` && `jsconfig.json`
   
3. cấu hình `.prettierrc`

4. `npm i sass -D`
   sài scss trong file

5. `normalize.css` 
   reset css
   
6. `npm i react-router-dom`

7. `npm i classnames`

8. 
```js
   "@fortawesome/fontawesome-svg-core": "^1.3.0",
   "@fortawesome/free-brands-svg-icons": "^6.0.0",
   "@fortawesome/free-regular-svg-icons": "^6.0.0",
   "@fortawesome/free-solid-svg-icons": "^6.0.0",
   "@fortawesome/react-fontawesome": "^0.1.17",
   ```

9.  
```js
   "@tippyjs/react": "^4.2.6",
   ```
   https://atomiks.github.io/tippyjs/v5/all-props/
   https://atomiks.github.io/tippyjs/v6/all-props/#delay
   muốn có animation thì dùng thêm thư viện `framer-motion`
   
10. 
```js    
   `npm i axios `  
   // vd voi fetch
   setLoading(true);
   fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounceSearchValue)}&type=less`)
      .then(res => res.json())
      .then(res => {
            setSearchResult(res.data)
            setLoading(false);
      })
      .catch(() => {
            setLoading(false);
            alert('Please try again')
      })
   // voi axios
   setLoading(true);
   axios.get(`https://tiktok.fullstack.edu.vn/api/users/search`, {
      params: {
            q: debounceSearchValue,
            type: less
      }
   })
      .then(res => {
            setSearchResult(res.data)
            setLoading(false);
      })
      .catch(() => {
            setLoading(false);
            alert('Please try again')
      })
```
   