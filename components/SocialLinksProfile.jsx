import myImage from "../assets/images/avatar-jessica.png"
export default function SocialLinksProfile() {
    return (
        <div className="container px-3 mx-auto flex flex-col items-center justify-center h-screen ">
            <div className="w-80 md:w-[450px] px-4 pb-4 md:px-7 md:pb-7 bg-gray-800 rounded-xl flex flex-col items-center my-12">
                <div className="w-24">
                    <img src={myImage} alt="avatar" className="rounded-full"/>
                </div>
                <div className="flex flex-col items-center my-8">
                    <p className="text-xl md:text-3xl font-semibold text-white mb-2">Mahmoud Abdelkarim</p>
                    <p className="text-[14px] md:text-lg font-semibold text-green mb-8">London, United Kingdom</p>
                    <p className="text-[14px] md:text-lg font-semibold text-white">&quot;Front-end developer and avid reader.&quot;</p>
                </div>
                <div className="flex flex-col items-center justify-between w-full">
                    <a href="#" className="flex items-center justify-center mb-4 w-[290px] md:w-full rounded-lg text-white hover:text-gray-700 hover:bg-green font-semibold bg-gray-700 cursor-pointer p-4">GitHub</a>
                    <a href="#" className="flex items-center justify-center mb-4 w-[290px] md:w-full rounded-lg text-white hover:text-gray-700 hover:bg-green font-semibold bg-gray-700 cursor-pointer p-4">Frontend Mentor</a>
                    <a href="#" className="flex items-center justify-center mb-4 w-[290px] md:w-full rounded-lg text-white hover:text-gray-700 hover:bg-green font-semibold bg-gray-700 cursor-pointer p-4">LinkedIn</a>
                    <a href="#" className="flex items-center justify-center mb-4 w-[290px] md:w-full rounded-lg text-white hover:text-gray-700 hover:bg-green font-semibold bg-gray-700 cursor-pointer p-4">Twitter</a>
                    <a href="#" className="flex items-center justify-center w-[290px] md:w-full rounded-lg text-white hover:text-gray-700 hover:bg-green font-semibold bg-gray-700 cursor-pointer p-4">Instagram</a>
                </div>
            </div>
        </div>
    )
}
