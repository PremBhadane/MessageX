import { useChatStore } from '../store/useChatStore';
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import ProfileHeader from "../components/ProfileHeader";
import ActiveTabSwitch from "../components/ActiveTabSwitch";
import ChatsList from "../components/ChatsList";
import ContactList from "../components/ContactList";
import ChatContainer from "../components/ChatContainer";
import NoConversationPlaceholder from "../components/NoConversationPlaceholder";

function ChatPage() {
  const { activeTab, selectedUser, setSelectedUser } = useChatStore();

  return (
    <div className="relative w-full max-w-6xl h-[650px]">
      <BorderAnimatedContainer>

        {/* LEFT SIDE — hidden on mobile when a user is selected */}
        <div className={`
          w-full sm:w-80 bg-slate-800/50 backdrop-blur-sm flex flex-col
          ${selectedUser ? "hidden sm:flex" : "flex"}
        `}>
          <ProfileHeader />
          <ActiveTabSwitch />
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {activeTab === "chats" ? <ChatsList /> : <ContactList />}
          </div>
        </div>

        {/* RIGHT SIDE — hidden on mobile when no user is selected */}
        <div className={`
          flex-1 flex flex-col bg-slate-900/50 backdrop-blur-sm
          ${selectedUser ? "flex" : "hidden sm:flex"}
        `}>
          {/* Back button — only visible on mobile */}
          {selectedUser && (
            <button
              onClick={() => setSelectedUser(null)}
              className="sm:hidden flex items-center gap-2 px-4 py-3 text-slate-300 hover:text-white bg-slate-800/50 border-b border-slate-700/50 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm font-medium">Back</span>
            </button>
          )}

          {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
        </div>

      </BorderAnimatedContainer>
    </div>
  );
}

export default ChatPage;