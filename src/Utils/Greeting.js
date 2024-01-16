const Greeting = () => {
  const date = new Date();
  const hours = date.getHours();
  const months = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
  ]

  let month = months[date.getMonth()]
  
 let today = `${date.getUTCDate()} ${month} ${date.getFullYear()}`

  let greeting = "";

  if (hours > 0 && hours < 12) {
    greeting = "Good morning";
  } 
  else if (hours >= 12 && hours < 18) {
    greeting = "Good afternoon";
  } 
  else if (hours >= 18 && hours < 21) {
    greeting = "Good evening";
  } 
  else {
    greeting = "Good night";
  }

  return (
    <div className="py-7 px-10 max-sm:px-2 max-sm:py-3">
      <div className=" max-w-[1300px] max-lg:container flex justify-between items-center">
        <h1 className=" text-white font-bold flex items-center gap-1 text-3xl max-sm:text-lg"><span className="max-sm:text-3xl">&#128075;</span>{greeting}</h1>

        <div>
          <p className=" text-white font-semibold text-lg max-sm:text-sm">{today}</p>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
