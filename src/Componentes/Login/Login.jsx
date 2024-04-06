

const Login = () => {
    return (
        <div className="hero">
  <div className="hero-content flex-col w-full mt-12">
    <div className="card shrink-0 w-1/2 shadow-2xl bg-base-100">
        <h2 className="w-fit mx-auto font-bold text-3xl py-2 px-5 border-b-2 border-green-400">Login Now</h2>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    )
}
export default Login