import '../App.css';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <hr className="my-6 border-black sm:mx-auto lg:my-8" />
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">

            {/* Instagram */}
            <a href="https://www.instagram.com/aapasc.asu/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <button className="bg-transparent p-1">
                <svg className="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
                </svg>
              </button>
            </a>
              
            {/* Email */}
            <a href="mailto:aapasc@gmail.com" aria-label="Email">
              <button className="bg-transparent p-1">
                <svg className="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
                  <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
                </svg>
              </button>
            </a>
          </div>
          
          <h4 className="articulat-cf text-sm text-right">ASIAN / ASIAN PACIFIC AMERICAN STUDENT COALITION OF ASU</h4>
        </div>
      </div>
    </footer>
  );
}