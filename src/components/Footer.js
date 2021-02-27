function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer>
        <div className="footerInfo">
            <p className="footerInfoTitle">How to use 😊</p>
            <div className="footerInfoContent">
                <p>Click on 'Add' button to write a task.</p>
                <p>Hit 'Save Task' and close once it's done.</p>
                <p>Double click the task to toggle a reminder.</p>
                <p>Delete the task that is completed.</p>
            </div>
        </div>
        Jaeri Park {currentYear}
        </footer>
    )
}

export default Footer