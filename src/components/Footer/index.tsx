export default function Footer() {
  return (
    <nav className="mt-auto py-16 bg-stone-800">
      <div className="section-wrapper">
        <div className="flex justify-between gap-4">
          <div>
            <h3 className="text-gray-400 select-none">Thanks!</h3>
            <p className="text-sm">
              with all ❤️ by{' '}
              <a
                href="https://www.linkedin.com/in/arielpacciaroni/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-white"
              >
                Ariel
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-gray-400 select-none">Follow me</h3>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/arielpacciaroni/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-100 hover:text-white text-sm"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/arielpacciaroni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-100 hover:text-white text-sm"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
