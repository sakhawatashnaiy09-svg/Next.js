async function page ({params}) {
    const { username } = await params
    console.log(username);
     return (
        <div>
            <h1>username is  {username}</h1>
        </div>
     )
}
export default page;