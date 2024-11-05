export default function Contact() {
    return (
        <>
            <div className="flex flex-col gap-6 py-4 px-2 md:px-0">
                <div className="flex items-center gap-4">
                    <i className="bi bi-person-raised-hand text-[20px] slg:text-[24px] xl:text-[28px] lg:text-[28px] text-primary"></i>
                    <h2 className="text-[20px] slg:text-[24px] lg:text-[28px] xl:text-[32px] text-primary">Get in Touch</h2>
                </div>
                <h2 className="text-[20px] slg:text-[24px] lg:text-[28px] xl:text-[32px] text-primary text-center">Send Me a Message</h2>
                <form action="" className="">
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            {/* name */}
                            <div className="form-group field">
                                <input id="name" required="" placeholder="Name" className="form-field" type="input" />
                                <label className="form-label" htmlFor="name">Name</label>
                            </div>
                            {/* email */}
                            <div className="form-group field">
                                <input id="email" required="" placeholder="Name" className="form-field" type="email" />
                                <label className="form-label" htmlFor="email">Email</label>
                            </div>
                        </div>
                        <label htmlFor="message" className="label_txt text-primary">Write Your Message</label>
                        <textarea name="" id="message" rows="1" className="w-[99%] md:w-full text-primary rounded-md p-2 ml-[1px] resize-none transition-all ease-in-out duration-500"></textarea>
                        {/* submit */}
                        <button type="submit" className="btnSubmit w-[20%] h-10 text-[18px] lg:[22px]">Send
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}