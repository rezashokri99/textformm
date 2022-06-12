import Logo_one from "../images/item-one.png";
import Logo_two from "../images/item-two.png";
import Logo_there from "../images/item-there.png";
import Logo_four from "../images/item-four.png";
import Logo_five from "../images/item-five.png";


const IntroductoryTexts = () => {
    return (
        <div className="w-11/12 lg:w-[1000px] ">
            <div className="w-full my-[50px] ">
                <div className="p-5 text-center text-white font-bold bg-[#f2c12a] text-[25px] border-[3px] border-dashed rounded-[16px]">
                    <p>
                        30 ساعت آموزش سطح یک مشاوره تحصیلی به همراه ویدیو های آفلاین به مدت 20 ساعت + استخدام بعد از برگزاری آزمون اعتبار سنجی و کسب خداقل نمره
                    </p>
                </div>
            </div>

            <div>
                <h1 className="mb-[50px] text-[26.5px] text-center font-bold text-white ">توی طرح مشاور شو نیمکت چه خبره ؟</h1>


                <div className="flex flex-col sm:flex-row sm:items-center sm:mb-4 ">
                    <div className="flex-shrink-0 flex items-center justify-center sm:items-start">
                        <img className="w-[150px] h-[150px]" src={Logo_one} alt="Logo_one" />
                    </div>
                    <div className="">
                        <h2 className="text-[24px] font-bold text-white mb-[10px] text-center sm:text-right">قدم اول: ثبت نام در طرح و تماس همکاران روابط عمومی</h2>
                        <h3 className="text-[19px] font-bold text-white text-center sm:text-right">تمامی دانش جویان یا فارغ التحصیلان دانشگاه های سراسر کشور می توانند در این طرح شرکت کنند که با پر کردن فرم بالا همکاران روابط عمومی نیمکت با شما تماس میگیرند جهت ثبت نهایی در طرح مشاور شو</h3>
                    </div>
                </div>
                <div className="hidden sm:flex sm:flex-row-reverse justify-center h-[250px]">
                    <svg className="w-[460px]" stroke="#f2c12a" fill="none" strokeDasharray={5} strokeDashoffset={100} strokeWidth={2}>
                        <path className="absolute h-full" id="c-dashed-line" d="m439 10c-13 209-413 0-417 213"></path>
                    </svg>
                </div>
                <div className="flex sm:hidden items-center justify-center">
                    <svg className="w-[220px]" stroke="#f2c12a" fill="none" strokeDasharray={5} strokeDashoffset={100} strokeWidth={2}>
                        <path d="m19 14c-28 155 133 18 79 155"></path>
                    </svg>
                </div>



                <div className="flex flex-col sm:flex-row-reverse sm:items-start sm:mb-4 ">
                    <div className="flex-shrink-0 flex items-center justify-center sm:hidden">
                        <img className="w-[120px]" src={Logo_two} alt="Logo_two" />
                    </div>
                    <div className="sm:grid sm:grid-cols-4">

                        <h2 className="text-[24px] font-bold text-white mb-[10px] text-center sm:text-left sm:col-span-3">قدم دوم: شرکت در کلاس های آموزش مشاوره به صورت آنلاین</h2>
                        <div className="hidden sm:flex items-center justify-center sm:items-start sm:col-span-1">
                            <img className="w-[120px]" src={Logo_two} alt="Logo_two" />
                        </div>
                        <h3 className="text-[19px] font-bold text-white text-center sm:text-right sm:col-span-4">تیم مشاوره مهندس سید حمید دهقان نیری مشاور ارشد مجموعه نیمکت با 14 سال سابقه ی مشاوره ی بیش از 17000 دانش آموز مسئولیت آموزش مشاوران این سیستم را به عهده دارند و حضور در کلاس های آنلاین آموزش سطح یک مشاوره الزامیست</h3>
                    </div>
                </div>
                <div className="hidden sm:flex sm:flex-row-reverse justify-center h-[250px]">
                    <svg className="w-[420px]" stroke="#f2c12a" fill="none" strokeDasharray={5} strokeDashoffset={100} strokeWidth={2}>
                        <path className="absolute h-full" id="c-dashed-line" d="m17 14c4 209 363 0 358 204"></path>
                    </svg>
                </div>
                <div className="flex sm:hidden items-center justify-center">
                    <svg className="w-[220px]" stroke="#f2c12a" fill="none" strokeDasharray={5} strokeDashoffset={100} strokeWidth={2}>
                        <path d="m19 14c-28 155 133 18 79 155"></path>
                    </svg>
                </div>



                <div className="flex flex-col sm:flex-row-reverse sm:items-start sm:mb-4 ">
                    <div className="flex-shrink-0 flex items-center justify-center sm:hidden">
                        <img className="w-[120px]" src={Logo_there} alt="Logo_there" />
                    </div>
                    <div className="sm:grid sm:grid-cols-4">
                        <div className="hidden sm:flex items-center justify-center sm:items-start sm:col-span-1">
                            <img className="w-[120px]" src={Logo_there} alt="Logo_there" />
                        </div>
                        <h2 className="text-[24px] font-bold text-white mb-[10px] text-center sm:text-right sm:col-span-3">قدم سوم: برگزاری آزمون اعتبار سنجی</h2>
                        <h3 className="text-[19px] font-bold text-white text-center sm:text-right sm:col-span-4">بعد از برگزاری دوره ی آموزش مشاوران تمامی افرادی که در این طرح ثبت نام کرده باشند و همچنین در کلاس ها بدون غیبت شرکت کرده باشند می توانند در این آزمون شرکت کنند . این آزمون به صورت آنلاین و همینطور مصاحبه ی ویدیو کال خواهد بود</h3>
                    </div>
                </div>
                <div className="hidden sm:flex sm:flex-row-reverse justify-center h-[250px]">
                    <svg className="w-[550px]" stroke="#f2c12a" fill="none" strokeDasharray={5} strokeDashoffset={100} strokeWidth={2}>
                        <path className="absolute h-full" id="c-dashed-line" d="m439 10c-13 209-413 0-417 213"></path>
                    </svg>
                </div>
                <div className="flex sm:hidden items-center justify-center">
                    <svg className="w-[220px]" stroke="#f2c12a" fill="none" strokeDasharray={5} strokeDashoffset={100} strokeWidth={2}>
                        <path d="m19 14c-28 155 133 18 79 155"></path>
                    </svg>
                </div>



                <div className="flex flex-col sm:flex-row-reverse sm:items-start sm:mb-4 ">
                    <div className="flex-shrink-0 flex items-center justify-center sm:hidden">
                        <img className="w-[120px]" src={Logo_four} alt="Logo_four" />
                    </div>
                    <div className="sm:grid sm:grid-cols-4">
                        <h2 className="text-[24px] font-bold text-white mb-[10px] text-center sm:text-left sm:col-span-3">قدم چهارم : معرفی امکانات مجموعه و دوره مدیریت فروش</h2>
                        <div className="hidden sm:flex items-center justify-center sm:items-start sm:col-span-1">
                            <img className="w-[120px]" src={Logo_four} alt="Logo_four" />
                        </div>
                        <h3 className="text-[19px] font-bold text-white text-center sm:text-right sm:col-span-4">همکارانی که بعد از مرحله ی آزمون مورد پذیرش قرار گیرند در همایش یک روزه ی مدیریت فروش شرکت کرده و وارد پروسه ی استخدام میشوند</h3>
                    </div>
                </div>
                <div className="hidden sm:flex sm:flex-row-reverse justify-center h-[250px]">
                    <svg className="w-[750px]" stroke="#f2c12a" fill="none" strokeDasharray={5} strokeDashoffset={100} strokeWidth={2}>
                        <path className="absolute h-full" id="c-dashed-line" d="m17 14c4 209 363 0 358 204"></path>
                    </svg>
                </div>
                <div className="flex sm:hidden items-center justify-center">
                    <svg className="w-[220px]" stroke="#f2c12a" fill="none" strokeDasharray={5} strokeDashoffset={100} strokeWidth={2}>
                        <path d="m19 14c-28 155 133 18 79 155"></path>
                    </svg>
                </div>



                <div className="mb-[100px] flex flex-col sm:justify-center sm:items-center mt-3 ">
                    <div className="flex-shrink-0 flex items-center justify-center mb-4 sm:w-[500px]">
                        <img className="w-[120px]" src={Logo_five} alt="Logo_five" />
                    </div>
                    <div className="sm:w-[500px] ">
                        <h2 className="text-[24px] font-bold text-white text-center mb-7">قدم آخر: اختصاص دانش آموز به صورت پایلوت</h2>
                        <h3 className="text-[19px] font-bold text-white text-center">پس از استخدام در مجموعه نیمکت میتوانید به صورت دور کاری دانش آموز دریافت کنید و مشاوره نیمکت را شروع کنید
                            لازم به ذکر است که شرکت در دوره ی مشاور شو نیمکت رایگان می باشد</h3>
                    </div>
                </div>

                <div className="mx-[15px] mb-[15px] flex items-center justify-center ">
                    <a href="#form" className="sm:w-[350px] w-full text-center p-5 font-bold text-lg text-white bg-[#f2c12a] border-[3px] border-dashed border-white rounded-2xl">
                        <span>همین الان ثبت نام میکنم!</span>
                    </a>

                </div>

            </div>
        </div>
    );
}

export default IntroductoryTexts;