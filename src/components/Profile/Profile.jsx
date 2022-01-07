import s from './Profile.module.css'

const Profile = () => {
    return (
      <div className ={s.content}>
      <div>
        <img src = "#" alt='fail'></img>
      </div>
      <div>
        ava + description
        <img src = "#" alt= 'fail'></img>
      </div>
      <div>
        My posts
          <div>
          New post
          </div>
          <div className = {s.posts}>
          <div className = {s.item}>
          post1
          </div>
          <div>
          post2
          </div>
          </div>

      </div>
      Main content
    </div>

    );
}

export default Profile;