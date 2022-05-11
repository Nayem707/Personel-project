const Dashboard = ({ user }) => {
  return (
    <section className='section'>
      <h4>
        Hello! "{user?.name}"{' '}
        <span className='bg-red'>
          <b>wellcome!</b>
        </span>{' '}
        to our E-Commers market place. From submited <b>{user?.email} </b>{' '}
        congrate! and Thank YoU!
      </h4>
    </section>
  );
};
export default Dashboard;
