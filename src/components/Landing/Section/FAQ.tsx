import Accordion from "../../common/Accordion";
const faqs = [
  {
    question: "What is NotesPilot?",
    answer:
      "NotesPilot is a user-friendly note-taking app designed to help you organize your thoughts, tasks, and important information. It offers features like note creation, categorization, tagging, and cloud syncing.",
  },
  {
    question: "How can I create a new note?",
    answer:
      "To create a new note: Navigate to the 'Create Note' button on the homepage or notes section. Enter the note title and content, add tags or categories, and click 'Save'.",
  },
  {
    question: "How can I organize my notes?",
    answer:
      "You can organize notes by using tags and folders/categories. Tags help categorize notes by topic, project, or priority.",
  },
  {
    question: "Can I edit a note after saving it?",
    answer:
      "Yes, simply click on the saved note you want to edit, make your changes, and click 'Save' again to update it.",
  },
  {
    question: "Does NotesPilot support real-time synchronization?",
    answer:
      "Yes, NotesPilot supports real-time synchronization across devices if you're connected to the internet.",
  },
  {
    question: "Can I use NotesPilot offline?",
    answer:
      "Yes, NotesPilot can be used offline. Changes will sync automatically when you're back online.",
  },
  {
    question: "What types of media can I include in my notes?",
    answer:
      "You can include text, images, and links. Additional media types such as audio and video may be added in future updates.",
  },
  {
    question: "Is there a way to recover deleted notes?",
    answer:
      "Yes, deleted notes are moved to the 'Trash' folder and can be restored within 30 days before being permanently deleted.",
  },
  {
    question: "How secure is my data on NotesPilot?",
    answer:
      "NotesPilot uses secure protocols (HTTPS) and encryption to ensure your data's safety, with regular server backups.",
  },
  {
    question: "Can I share my notes with others?",
    answer:
      "Sharing functionality is currently under development, but you'll soon be able to share notes via links or with other users.",
  },
  {
    question: "Is there a mobile app for NotesPilot?",
    answer:
      "NotesPilot is currently a web app accessible on desktop and mobile browsers. A dedicated mobile app is in development.",
  },
  {
    question: "How can I search for specific notes?",
    answer:
      "You can search for notes using the search bar at the top of the notes section by entering keywords, tags, or categories.",
  },
  {
    question: "Can I customize the appearance of my notes?",
    answer:
      "Yes, you can format your notes with headings, bold, italic, underline, and text alignment. More formatting options are coming soon.",
  },
  {
    question: "How do I export my notes?",
    answer:
      "You can export your notes in PDF or plain text format. Open the note, select 'Export' from the menu, and choose the format.",
  },
  {
    question: "Does NotesPilot offer recurring reminders or notifications?",
    answer:
      "Currently, NotesPilot doesn’t support recurring reminders, but this feature is in the roadmap for future updates.",
  },
  {
    question: "What technologies power NotesPilot?",
    answer:
      "NotesPilot is built using React for the frontend, with Redux Toolkit (RTK) and RTK Query for state management and data fetching. The backend is a RESTful API.",
  },
  {
    question: "Who can I contact for support?",
    answer:
      "For support, you can use the 'Contact Us' form on the website or email us at support@notespilot.com.",
  },
];

const FAQ = () => {
  return (
    <section className="flex flex-col gap-5 px-5 py-20 md:mx-auto md:w-3/5 md:py-32 md:text-center">
      <p className="heading text-sm">Frequently Asked Questions</p>
      <h1 className="title">Let’s clarify some of your questions</h1>
      <p className="paragraph">
        Frequently Asked Questions (FAQ) for NotesPilot: Everything You Need to
        Know About Features, Functionality, and User Experience
      </p>
      <div className="mt-5 flex flex-col gap-4 md:grid md:grid-cols-2">
        {faqs.map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
