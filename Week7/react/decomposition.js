// Classroom!

<App>
    <Header>
        <Navigation>
            <MenuList>
                <li> About </li>
                </MenulList>
        </Navigation>
    </Header>
    <Main>
        <Sidebar>
            <SidebarActions>
                <Link />
            </SidebarActions>
            <SidebarMembers>
                <MemberList>
                    <SingleMember>
                        <img />
                        <h4> Name </h4>
                    </SingleMember>
                </MemberList>
            </SidebarMembers>
        </Sidebar>
        <Feed>
            <FeedList>
                <FeedBox>
                    <h1>Title</h1>
                    <FeedItems>
                        <SingleItem>
                        </SingleItem>
                    </FeedItems>
                </FeedBox>
            </FeedList>
        </Feed>
    </Main>
</App>


    // Youtube

    <App>
        <Header>
            <HeadNav>
            <button/> // hamburger
            <button/> // home/logo
            </HeadNav>
            <Search>
                <input /> // search bar
                <button/> //button search
            </Search>
            <AccountControls>
            <button/>
            <button/>
            <button/>
            <button/>
            </AccountControls>

        </Header>
        <Main>
            <Sidebar>
                <SideNav>
                    <h3>Library</h3>
                    <li> <img /> <h4></h4> </li>
                </SideNav>
                <SideLibrary>
                    <h3>Subscriptions</h3>
                    <li> <img /> <h4></h4> </li>
                </SideLibrary>
                <SideSubscriptions>
                    <li> <img /> <h4></h4> </li>
                </SideSubscriptions>
                <SideSettings>
                    <li> <img /> <h4></h4> </li>
                </SideSettings>
                <SideInfo>
                    <p />
                </SideInfo>
            </Sidebar>
            <Feed>
                <FeedList>
                    <FeedBoxRecommended>
                        <h2>Recommended</h2>
                        <FeedBoxList>
                            <FeedItem>
                                <img />
                                <h3 />
                                <p />
                            </FeedItem>
                        </FeedBoxList>
                        <ExpandFeed>
                            <p/>
                        </ExpandFeed>
                    </FeedBoxRecommended>
                    <FeedBoxChannel>
                        <a><img/>channel</a>
                        <p/>
                        <button/> //subscribe
                            <button/> //not interested
                        <FeedBoxList>
                            <FeedItem>
                                <img />
                                <h3 />
                                <p />
                            </FeedItem>
                        </FeedBoxList>
                        <ExpandFeed>
                            <p/>
                        </ExpandFeed>
                    </FeedBoxChannel>
                </FeedList>
            </Feed>
        </Main>
    </App>