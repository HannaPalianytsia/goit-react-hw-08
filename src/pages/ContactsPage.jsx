import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import DocumentTitle from "../components/documentTitle/DocumentTitle";
import SearchBox from "../components/searchBox/SearchBox";
import ContactList from "../components/contactList/ContactList";
import ContactForm from "../components/contactForm/ContactForm";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your contacts</DocumentTitle>
      <ContactForm />
      <SearchBox />
      <div>{isLoading && "Request in progress..."}</div>
      <ContactList />
    </>
  );
};

export default ContactsPage;
