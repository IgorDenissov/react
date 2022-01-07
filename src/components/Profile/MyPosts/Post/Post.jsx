import s from " ./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiewire.com%2F2018%2F05%2Firon-man-suit-stolen-robert-downey-jr-1201962372%2F&psig=AOvVaw30yTegqOmq27Sqzl9OKeUF&ust=1627508510368000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCODXxPmbhPICFQAAAAAdAAAAABAF"
        alt=""
      />
      post1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;