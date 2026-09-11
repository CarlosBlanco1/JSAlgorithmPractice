import curses

def main(stdscr):
    file_name = 'example.txt'

    curses.curs_set(1)
    curses.start_color()
    curses.init_pair(1, curses.COLOR_WHITE, curses.COLOR_GREEN)
    curses.init_pair(2, curses.COLOR_WHITE, curses.COLOR_RED)

    r = open(file_name, "r")

    _, width = stdscr.getmaxyx()
    words = r.read().lower()

    stdscr.addstr(0, 0, words, curses.COLOR_WHITE)

    y, x = 0, 0

    stdscr.move(0,0)
    stdscr.refresh()

    for word in words:
        if((word == '\n') or (x >= width - 1)):
            y += 1
            x = 0
            continue

        key = stdscr.getch()
        key_char = chr(key)

        if word == key_char:
            stdscr.addch(y, x, word, curses.color_pair(1))
        else:
            stdscr.addch(y, x, word, curses.color_pair(2))

        x += 1
        stdscr.move(y, x)
        stdscr.refresh()    


curses.wrapper(main)