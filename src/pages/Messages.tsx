import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Send, Phone, Video, MoreVertical } from "lucide-react";
import { useState } from "react";

const conversations = [
  {
    id: 1,
    name: "Sarah Chen",
    avatar: "SC",
    lastMessage: "Great job at the beach cleanup!",
    time: "2m ago",
    unread: 2,
    online: true
  },
  {
    id: 2,
    name: "Ocean Guardians",
    avatar: "OG",
    lastMessage: "Next event scheduled for Dec 20",
    time: "1h ago",
    unread: 0,
    online: false,
    isGroup: true
  },
  {
    id: 3,
    name: "Marcus Rodriguez",
    avatar: "MR",
    lastMessage: "Thanks for the mentorship tips!",
    time: "3h ago",
    unread: 1,
    online: true
  },
  {
    id: 4,
    name: "Community Kitchen",
    avatar: "CK",
    lastMessage: "We need more volunteers this week",
    time: "5h ago",
    unread: 0,
    online: false,
    isGroup: true
  },
  {
    id: 5,
    name: "Emily Watson",
    avatar: "EW",
    lastMessage: "The youth program is doing great!",
    time: "1d ago",
    unread: 0,
    online: false
  }
];

const currentMessages = [
  {
    id: 1,
    sender: "Sarah Chen",
    content: "Hey! How are you doing?",
    time: "10:30 AM",
    isMine: false
  },
  {
    id: 2,
    sender: "You",
    content: "I'm doing great! Just finished volunteering at the beach cleanup.",
    time: "10:32 AM",
    isMine: true
  },
  {
    id: 3,
    sender: "Sarah Chen",
    content: "That's awesome! I saw the photos on the community feed. You guys collected so much!",
    time: "10:33 AM",
    isMine: false
  },
  {
    id: 4,
    sender: "You",
    content: "Yes! It was amazing to see so many people come together. Are you joining the next event?",
    time: "10:35 AM",
    isMine: true
  },
  {
    id: 5,
    sender: "Sarah Chen",
    content: "Great job at the beach cleanup!",
    time: "10:37 AM",
    isMine: false
  }
];

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20 pb-4">
        <div className="container mx-auto px-4 lg:px-8 h-[calc(100vh-160px)]">
          <Card className="h-full flex flex-col lg:flex-row overflow-hidden">
            {/* Conversations List */}
            <div className="w-full lg:w-80 border-r border-border">
              <CardHeader className="border-b border-border">
                <h2 className="text-2xl font-bold">Messages</h2>
                <div className="relative mt-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search conversations..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-y-auto h-[calc(100vh-300px)]">
                  {filteredConversations.map((conv) => (
                    <button
                      key={conv.id}
                      onClick={() => setSelectedChat(conv.id)}
                      className={`w-full p-4 flex items-start gap-3 hover:bg-accent transition-colors ${
                        selectedChat === conv.id ? 'bg-accent' : ''
                      }`}
                    >
                      <div className="relative">
                        <Avatar>
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {conv.avatar}
                          </AvatarFallback>
                        </Avatar>
                        {conv.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                        )}
                      </div>
                      <div className="flex-1 text-left">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">{conv.name}</span>
                            {conv.isGroup && (
                              <Badge variant="secondary" className="text-xs">Group</Badge>
                            )}
                          </div>
                          <span className="text-xs text-muted-foreground">{conv.time}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-muted-foreground truncate">
                            {conv.lastMessage}
                          </p>
                          {conv.unread > 0 && (
                            <Badge className="ml-2 min-w-[20px] h-5 flex items-center justify-center">
                              {conv.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {conversations.find(c => c.id === selectedChat)?.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">
                      {conversations.find(c => c.id === selectedChat)?.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {conversations.find(c => c.id === selectedChat)?.online ? 'Online' : 'Offline'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Phone className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Video className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-accent/20">
                {currentMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.isMine ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        msg.isMine
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-card border border-border'
                      }`}
                    >
                      {!msg.isMine && (
                        <p className="text-xs font-semibold mb-1 text-primary">{msg.sender}</p>
                      )}
                      <p className="text-sm">{msg.content}</p>
                      <p className={`text-xs mt-1 ${msg.isMine ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-border">
                <div className="flex gap-2">
                  <Input
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && newMessage.trim()) {
                        setNewMessage("");
                      }
                    }}
                  />
                  <Button>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Messages;
