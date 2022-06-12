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
                        یه برنامه ریزی دو هفته ای داری که میتونی با کمک ویدیو های آفلاین و کلاس های آنلاین در مدت دو هفته کل سال دهم یا یازدهم خودتو جمع کنی
                    </p>
                </div>
            </div>

            <div>
                <h1 className="mb-[50px] text-[26.5px] text-center font-bold text-white ">توی طرح معدل ساز صفر کلوین چیکار می‌کنیم؟</h1>


                <div className="flex flex-col sm:flex-row sm:items-center sm:mb-4 ">
                    <div className="flex-shrink-0 flex items-center justify-center sm:items-start">
                        <img className="w-[150px] h-[150px]" src={Logo_one} alt="Logo_one" />
                    </div>
                    <div className="">
                        <h2 className="text-[24px] font-bold text-white mb-[10px] text-center sm:text-right">قدم اول: همایش مشاوره ای صفر کلوین</h2>
                        <h3 className="text-[19px] font-bold text-white text-center sm:text-right">تو این کارگاه روش درست مطالعه رو بهت یاد میدم و میگم چرا کلی درس می خونی اما توی امتحان نمره خوبی نمی گیری، یا مطالب یادت میره!</h3>
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

                        <h2 className="text-[24px] font-bold text-white mb-[10px] text-center sm:text-left sm:col-span-3">قدم دوم: هماهنگی با مشاور و دریافت برنامه</h2>
                        <div className="hidden sm:flex items-center justify-center sm:items-start sm:col-span-1">
                            <img className="w-[120px]" src={Logo_two} alt="Logo_two" />
                        </div>
                        <h3 className="text-[19px] font-bold text-white text-center sm:text-right sm:col-span-4">الان وقت دریافت برنامست و وقتشه که بترکونی . اینجا دو تا راه داری با با مشاوران و پشتیبان های طرح صفر کلوین که از رتبه ها هستن هماهنگ میشی و برنامه ی شخصی سازی و فردی میگیرید یا بزنامه ی جامع مطالعاتی دو هفته ای دریافت میکنی</h3>
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
                        <h2 className="text-[24px] font-bold text-white mb-[10px] text-center sm:text-right sm:col-span-3">قدم سوم: شرکت در کارگاه مشاوره های شبانه</h2>
                        <h3 className="text-[19px] font-bold text-white text-center sm:text-right sm:col-span-4">6 تا کارگاه مشاوره داری تو این دوره ی رایگان مطالعاتی که بر مجموعه همایش های ویتامین موفقیت میشه و بر اساس اونا میتونی روند برنامه ریزی یکساله و تمامی تغییرات کنکور و ضرایب و سهمیه ها و نحوه ی تاثیر معدلو به همراه کلی انگیزه دست بیاد</h3>
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
                        <h2 className="text-[24px] font-bold text-white mb-[10px] text-center sm:text-left sm:col-span-3">قدم چهارم : شرکت تو کلاس های آنلاین و آفلاین</h2>
                        <div className="hidden sm:flex items-center justify-center sm:items-start sm:col-span-1">
                            <img className="w-[120px]" src={Logo_four} alt="Logo_four" />
                        </div>
                        <h3 className="text-[19px] font-bold text-white text-center sm:text-right sm:col-span-4">دو جلسه آنلاین و یک جلسه ی آفلاین برات در نظر گرفتیم که میتونی با اونا کل موضوعات درسی رو جمع کنی دیدن این ویدیو ها با حضور اساتید برتر کشور سرعت یادگیریتو هزار برابر میکنه</h3>
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
                        <h2 className="text-[24px] font-bold text-white text-center mb-7">قدم آخر: شرکت در آزمون بزرگ صفر کلوین</h2>
                        <h3 className="text-[19px] font-bold text-white text-center">طرح بورسی صفر کلوین برای کسایی که تو این آزمون شرکت کنن و جزو نفرات برتر باشن ، یادت باشه این آزمون از برنامه ی مطلعاتی طرح میشه</h3>
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